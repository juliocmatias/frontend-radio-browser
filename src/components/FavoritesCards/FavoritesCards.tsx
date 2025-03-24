import { DeleteIcon, EditIcon, PlayIcon, StopIcon } from '@/components/Icons';

const listRadio = [
  { name: 'CNR-1 中国之声', desc: 'China, news' },
  { name: 'Sertanejo Brasil', desc: 'Brasil, RJ' },
  { name: 'Rádio FM', desc: 'Brasil, FM' },
  {
    name: 'Radio Sertanejo Só Modão',
    desc: 'moda, moda de viola, modao, sertanejo'
  },
  { name: 'France Inter', desc: 'France' }
];

export const FavoritesCards = () => {
  return (
    <div className="bg-card flex flex-col rounded-md pb-3 text-black">
      <div className="border-tertiary flex h-[72px] items-center gap-3 rounded-t-md border-b p-3 pl-7 sm:pl-10">
        <button>
          <StopIcon size={35} weight="fill" />
        </button>
        <h2 className="line-clamp-2 w-full text-xl font-bold break-words sm:text-3xl">
          NOME DA RÁDIO ATUAL
        </h2>
      </div>
      <div className="flex flex-col gap-3 rounded-b-md p-3">
        {listRadio.map((station, index) => (
          <div
            key={index}
            className="bg-tertiary border-tertiary flex min-h-[72px] items-center gap-3 rounded-sm border p-3 sm:pl-6"
          >
            <button className="border-card bg-card rounded-full border p-2">
              {index === 0 ? (
                <StopIcon size={28} weight="fill" />
              ) : (
                <PlayIcon size={28} weight="fill" />
              )}
            </button>

            <div className="flex flex-grow flex-col justify-center">
              <h2 className="line-clamp-2 w-full text-lg font-bold break-words sm:text-2xl">
                {station.name}
              </h2>
              <p className="hidden text-sm sm:block">{station.desc}</p>
            </div>

            <div className="ml-auto flex gap-2 sm:gap-3">
              <button className="hidden sm:block">
                <EditIcon size={24} weight="fill" />
              </button>
              <button>
                <DeleteIcon size={24} weight="fill" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
