import { ModeToggle } from '@/components/theme/mode-toogle'

export function Header() {
    return (
        <>
            <div className='flex items-center justify-between mt-4 px-6'>
                <h1 className='font-bold text-2xl mx-auto'>
                    Grade Issues JBS-TRS
                </h1>
                <ModeToggle />
            </div>
        </>
    )
}