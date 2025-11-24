export default function Footer() {
  return (
    <footer className='w-full py-6 bg-green-500/40 backdrop-blur-md border-t border-green-300/30'>
      <div className='max-w-6xl mx-auto text-center text-green-900'>
        <p className='font-semibold'>
          © {new Date().getFullYear()} Saksham — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
