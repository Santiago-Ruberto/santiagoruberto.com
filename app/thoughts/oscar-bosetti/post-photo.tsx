"use client";

import Image from "next/image";
import { useRef } from "react";

type PostPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function PostPhoto({ src, alt, width, height }: PostPhotoProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="post-photo-trigger"
        aria-label={`Ampliar foto: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <Image src={src} alt={alt} width={width} height={height} unoptimized />
      </button>
      <dialog
        ref={dialog}
        className="post-photo-lightbox"
        aria-label={alt}
        onClose={() => trigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className="post-photo-close"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          Cerrar
        </button>
        <Image src={src} alt={alt} width={width} height={height} unoptimized />
      </dialog>
    </>
  );
}
