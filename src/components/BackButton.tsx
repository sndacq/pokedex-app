import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/')} className="text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 focus:ring-1 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
      <svg className="h-3 w-3" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default BackButton;
