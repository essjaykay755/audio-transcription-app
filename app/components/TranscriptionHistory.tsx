import { XMarkIcon, TrashIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Transcription {
  id: string;
  text: string;
  timestamp: string;
}

interface Props {
  history: Transcription[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export default function TranscriptionHistory({ history, onRemove, onClearAll }: Props) {
  if (history.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <ClockIcon className="h-6 w-6 text-purple-500 dark:text-purple-400" />
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            History
          </h2>
          <span className="ml-2 px-2.5 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-zinc-800 dark:text-purple-300">
            {history.length}
          </span>
        </div>
        <button
          onClick={onClearAll}
          className="flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-zinc-800"
        >
          <TrashIcon className="h-4 w-4 mr-2" />
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 p-6 hover:shadow-md transition-all duration-200"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onRemove(item.id)}
                className="p-1 rounded-full hover:bg-red-50 dark:hover:bg-zinc-700"
                aria-label="Delete transcription"
              >
                <XMarkIcon className="h-5 w-5 text-red-500 dark:text-red-400" />
              </button>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <ClockIcon className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
              <time className="text-sm text-gray-500 dark:text-zinc-400">
                {new Date(item.timestamp).toLocaleString(undefined, {
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
              </time>
            </div>

            <div className="pr-8">
              <p className="text-gray-800 dark:text-zinc-200 whitespace-pre-wrap leading-relaxed">
                {item.text}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
          </div>
        ))}
      </div>
    </div>
  );
} 