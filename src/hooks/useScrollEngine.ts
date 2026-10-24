'use client';

import { useEffect, useRef } from 'react';

/**
 * useScrollEngine
 * Maintains ambient paper grain flicker on twos while ensuring all chapters
 * and case studies scroll naturally and stably without zoom or lateral shifts.
 */
export function useScrollEngine() {
  const textureTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure all camera rigs and timed pieces are completely static and clean
    const cameraRigs = document.querySelectorAll<HTMLElement>('.camera-rig');
    cameraRigs.forEach((rig) => {
      rig.style.transform = 'none';
    });

    const kEls = document.querySelectorAll<HTMLElement>('.k');
    kEls.forEach((el) => {
      el.style.setProperty('--t', '1');
    });

    let animationFrameId: number;
    let isRunning = true;

    const tick = (now: number) => {
      if (!isRunning) return;

      // Texture on Twos (12 frames per second = ~83.3ms) for subtle background paper grain
      if (now - textureTimeRef.current >= 83.3) {
        textureTimeRef.current = now;
        frameCountRef.current++;
        const frame = frameCountRef.current;

        const grainX = (frame * 37) % 240;
        const grainY = (frame * 29) % 240;
        document.documentElement.style.setProperty('--grain-x', `${grainX}px`);
        document.documentElement.style.setProperty('--grain-y', `${grainY}px`);

        const turbulence = document.getElementById('paper-turbulence');
        if (turbulence) {
          turbulence.setAttribute('seed', String(frame % 7));
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
}
