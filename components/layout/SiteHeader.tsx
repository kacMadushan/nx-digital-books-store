import Link from 'next/link';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const SiteHeader = () => {
  return (
    <header className='relative'>
      <div className='container mx-auto px-4'>
        <div className='flex items-end justify-end gap-x-4 py-4'>
          <div className='bg-base flex size-14 items-center justify-center rounded-full'>
            <Link
              className='bg-background text-primary hover:bg-highlight size-12 rounded-full px-2 py-2.5 text-center hover:text-base'
              href='#'
            >
              <HeartIcon className='size-8' />
            </Link>
          </div>
          <div className='bg-base relative flex size-14 items-center justify-center rounded-full'>
            <Link
              className='bg-background text-primary hover:bg-highlight size-12 rounded-full px-2 py-1.5 text-center hover:text-base'
              href='#'
            >
              <ShoppingBagIcon className='size-8' />
            </Link>
            <div className='bg-secondary text-highlight absolute top-0 right-1 size-4 rounded-full text-center text-xs'>
              0
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
