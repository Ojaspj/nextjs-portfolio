export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <div
        className="wrap flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <span className="font-mono text-[12px] text-slate">
          © {new Date().getFullYear()} Prajwal Joshi
        </span>
        <span className="font-mono text-[12px] text-slate">
          Built with care · joshiprajwal.com.np
        </span>
      </div>
    </footer>
  );
}
