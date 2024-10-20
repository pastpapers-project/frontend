import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PaperPage = () => {
  const router = useRouter();
  const { url } = router.query;
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    if (typeof url === 'string') {
      setPdfUrl(decodeURIComponent(url));
    }
  }, [url]);

  if (!pdfUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen">
      <iframe src={pdfUrl} className="w-full h-full" />
      <p>Hello</p>
    </div>
  );
};

export default PaperPage;