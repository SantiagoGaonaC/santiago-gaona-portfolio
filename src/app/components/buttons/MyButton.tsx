import React from "react";

export default function MyButton({
  href,
  title,
  icon,
  description,
}: {
  href: string;
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d={icon} />
        </svg>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`m-0 max-w-[30ch] text-sm opacity-50`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </a>
  );
}
