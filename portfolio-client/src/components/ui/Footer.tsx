const Footer = () => {
    return (
      <footer className="w-full py-6 flex items-center justify-center bg-gradient-to-r from-zinc-950 via-black to-zinc-950 border-t border-zinc-800/30 relative">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent" />
        <p className="text-sm text-gray-400 tracking-wide relative z-10">
          Yours Truly, Krish
        </p>
      </footer>
    );
  };
  
  export default Footer;
  