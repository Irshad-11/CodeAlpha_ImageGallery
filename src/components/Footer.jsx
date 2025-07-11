function Footer() {
  return (
    <footer className="w-full px-4 py-8 text-sm text-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-screen-md mx-auto space-y-2">
        <p className="text-base font-semibold text-slate-800 dark:text-slate-200 font-pacifico md:text-[20px] font-thin">
          Vintage: Image Gallery
        </p>

        <div className="flex flex-row justify-center items-center gap-2">
          <a
            href="https://github.com/Irshad-11"
            className="hover:underline hover:text-slate-900 dark:hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span >|</span>

          <a
            href="https://linkedin.com/in/irshad-hossain-785548323/"
            className="hover:underline hover:text-slate-900 dark:hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>|</span>

          <a
            href="https://www.facebook.com/irshad.risad"
            className="hover:underline hover:text-slate-900 dark:hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
          © 2025 Irshad Hossain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
