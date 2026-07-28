import { type FC, useEffect, useRef } from "react";

type Props = {
  base: string;
  width: number;
  height: number;
  overlay?: string;
  duration?: number;
  direction?: "top-to-bottom" | "bottom-to-top";
  mode?: "appear" | "disappear";
};

const Canvas: FC<Props> = ({
  base,
  overlay,
  width,
  height,
  duration,
  direction = "top-to-bottom",
  mode = "disappear",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    let animationFrame: number;
    let startTime: number;

    const init = async () => {
      const baseImg = await loadImage(base);
      const overlayImg = overlay ? await loadImage(overlay) : null;

      if (!overlayImg) {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(baseImg, 0, 0, width, height);
        return;
      }

      const animDuration = duration ?? 1000;

      const render = (time: number) => {
        if (!startTime) startTime = time;

        let elapsed = time - startTime;

        if (elapsed > animDuration) {
          startTime = time;
          elapsed = 0;
        }

        const progress = elapsed / animDuration;
        const effectiveProgress = mode === "appear" ? 1 - progress : progress;

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(baseImg, 0, 0, width, height);

        const visibleHeight = overlayImg.height * (1 - effectiveProgress);

        if (visibleHeight > 0) {
          const sourceY = direction === "bottom-to-top" ? 0 : overlayImg.height - visibleHeight;
          const destY = direction === "bottom-to-top" ? 0 : (sourceY / overlayImg.height) * height;

          ctx.drawImage(
            overlayImg,
            0,
            sourceY,
            overlayImg.width,
            visibleHeight,
            0,
            destY,
            width,
            (visibleHeight / overlayImg.height) * height,
          );
        }

        animationFrame = requestAnimationFrame(render);
      };

      animationFrame = requestAnimationFrame(render);
    };

    init();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [base, overlay, width, height, duration, direction, mode]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
