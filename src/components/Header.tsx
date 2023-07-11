import { useState } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

export const Header = () => {
  const [input, setInput] = useState('');
  return (
    <div className='w-full flex justify-between items-center py-2'>
      <h1>Top Foods</h1>
      <div className='relative w-80 flex justify-between items-center rounded border bg-gray-100 group'>
        <label htmlFor='header-input-text' className='p-2'>
          <MagnifyingGlass />
        </label>
        <input
          id='header-input-text'
          type='text'
          className='flex-1 outline-none py-2 pr-1 transition rounded bg-gray-100'
          placeholder='Search for a food...'
          value={input}
          autoComplete='off'
          onChange={({ target: { value } }) => setInput(value)}
        />
        {input && (
          <button
            type='button'
            className='p-1 m-1 rounded-full hover:bg-gray-200 transition'
            onClick={() => setInput('')}
          >
            <X />
          </button>
        )}
      </div>
      <div />
    </div>
  );
};
