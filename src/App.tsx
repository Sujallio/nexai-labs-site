import { Routes, Route } from "react-router-dom";
import Home from "./routes/index";
import Advantage from "./routes/advantage";
import Book from "./routes/book";
import Careers from "./routes/careers";
import Contact from "./routes/contact";
import FAQ from "./routes/faq";
import Pricing from "./routes/pricing";
import Process from "./routes/process";
import Services from "./routes/services";
import Work from "./routes/work";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-brand/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/advantage" element={<Advantage />} />
      <Route path="/book" element={<Book />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/process" element={<Process />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
