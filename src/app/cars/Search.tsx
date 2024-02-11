"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex flex-col items-center lg:flex-row gap-4 w-full">
            <input
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
                type="text"
                name="search"
                className="px-4 py-2 w-full rounded-md shadow-lg border-[0.5px] border-black"
                placeholder={placeholder}
                id="house-search"
            />
            <button className="text-black font-bold py-2 px-4 rounded-md w-full lg:w-max bg-white hover:bg-slate-200">Search</button>
        </div>
    )
}