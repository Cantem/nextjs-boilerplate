import Image from 'next/image';
import Container from '@/app/components/container';
import Ballroom from '../../public/ballroom.jpg';
import Hotel from '../../public/hotel.jpg';
import Year from '../../public/year.png';
import Happy from '../../public/happy-birthday.webp';
import { staticBirthDate } from '@/lib/constants';

export default function Home() {
	return (
		<main>
			<Container>
				<h1 className='text-5xl md:text-7xl font-bold text-center md:pr-8 pt-10'>Jaki dzisiaj mamy dzień?</h1>
				<h1 className='text-5xl md:text-7xl font-bold text-center md:pr-8 pt-10 pb-10'>{staticBirthDate}!</h1>
				<div className='mb-8 md:mb-16 sm:mx-0'>
					<Image src={Happy} alt='Cover Image for' className={'shadow-sm w-full'} width={1300} height={630} />
				</div>
				<h2 className='text-5xl md:text-7xl font-bold text-center md:pr-8 pb-10'>Co?</h2>
				<div className='mb-8 md:mb-16 sm:mx-0'>
					<Image src={Ballroom} alt='Cover Image for' className={'shadow-sm w-full'} width={1300} height={630} />
				</div>
				<h2 className='text-5xl md:text-7xl font-bold text-center md:pr-8 pb-10'>Gdzie?</h2>
				<div className='mb-8 md:mb-16 sm:mx-0'>
					<Image src={Hotel} alt='Cover Image for' className={'shadow-sm w-full'} width={1300} height={630} />
				</div>
				<h2 className='text-5xl md:text-7xl font-bold text-center md:pr-8 pb-10'>Kiedy?</h2>
				<h2 className='text-5xl md:text-7xl font-bold text-center md:pr-8 pb-10'>01.03.2025 - 03.03.2025</h2>
				<div className='mb-8 md:mb-16 sm:mx-0'>
					<Image src={Year} alt='Cover Image for' className={'shadow-sm w-full'} width={1300} height={630} />
				</div>
			</Container>
		</main>
	);
}
