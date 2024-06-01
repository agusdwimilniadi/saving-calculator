import { FormatRupiah } from '@arismun/format-rupiah';
import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import CopyToClipboardButton from './components/CopyToClipboard';

export default function App() {
  const [income, setIncome] = useState(0);

  return (
    <section className="mx-20 text-center my-10">
      <div>
        <h1 className="text-2xl font-bold">Saving Calculator</h1>
      </div>
      <div className="my-10">
        <CurrencyInput
          id="input-example"
          name="income"
          placeholder="Please insert your income"
          defaultValue={0}
          onValueChange={(value) => {
            setIncome(value ? parseInt(value) : 0);
          }}
          prefix="Rp. "
          className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Your Real Money</h1>
        <div>
          <p>Kamu bisa ambil uang itu (40%) : </p>
          <div className="flex items-center flex-col justify-center">
            <p className="font-bold">
              <FormatRupiah value={income * 0.4} />
            </p>
            <CopyToClipboardButton textToCopy={`${(income * 40) / 100}`} />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Your Saving Total</h1>
        <div>
          <p>Total(60%) : </p>
          <div className="flex items-center flex-col justify-center">
            <p className="font-bold">
              <FormatRupiah value={income * 0.6} />
            </p>
            <CopyToClipboardButton textToCopy={`${(income * 60) / 100}`} />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Result Saving</h1>
        <div className="my-10 grid grid-cols-2 items-center justify-center">
          <div>
            <p>Bibit Dana Darurat (25%) : </p>
            <div className="flex items-center flex-col justify-center">
              <p className="font-bold">
                <FormatRupiah value={income * 0.25} />
              </p>
              <CopyToClipboardButton textToCopy={`${income * 0.25}`} />
            </div>
          </div>
          <div>
            <p>Bibit Income (20%) : </p>
            <div className="flex items-center flex-col justify-center">
              <p className="font-bold">
                <FormatRupiah value={income * 0.2} />
              </p>
              <CopyToClipboardButton textToCopy={`${income * 0.2}`} />
            </div>
          </div>
          <div>
            <p>Bibit RDN BCA (10%) : </p>
            <div className="flex items-center flex-col justify-center">
              <p className="font-bold">
                <FormatRupiah value={income * 0.1} />
              </p>
              <CopyToClipboardButton textToCopy={`${income * 0.1}`} />
            </div>
          </div>
          <div>
            <p>Kita Bisa (5%) : </p>
            <div className="flex items-center flex-col justify-center">
              <p className="font-bold">
                <FormatRupiah value={income * 0.05} />
              </p>
              <CopyToClipboardButton textToCopy={`${income * 0.05}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
