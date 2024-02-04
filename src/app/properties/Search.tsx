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
                className="px-4 py-2 w-full rounded-lg"
                placeholder={placeholder}
                id="house-search"
            />
            <button className="text-white font-bold py-2 px-4 rounded-lg w-full lg:w-max bg-black hover:bg-slate-900">Search</button>
        </div>
    )
}