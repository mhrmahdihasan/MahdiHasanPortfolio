import Link from "next/link";
import { useRouter } from "next/router";

const BackBtn = () => {
  const router = useRouter();
  return (
    <Link className="demo-back-link" onClick={() => router.back()} href="#">
      <i className="fas fa-arrow-left" />
    </Link>
  );
};
export default BackBtn;
