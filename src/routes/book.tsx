import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to contact page
    navigate("/contact", { replace: true });
  }, [navigate]);

  return null;
}
