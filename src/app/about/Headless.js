'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Example() {
  return (
    <div className="w-screen flex justify-center h-screen items-center">
      {/* copy below code only */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>Press</Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <>
              Edit
              </>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
