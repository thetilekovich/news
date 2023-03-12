import React from 'react'


interface EmailSubscribeProps {
    handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: () => void,
    emailValue: string

}


const EmailSubscribe: React.FC<EmailSubscribeProps> = ({handleChange, handleSubmit, emailValue}) => {
  return (
    <div className="email-subscribe bg-white px-3 py-5 rounded-md">
                        <h1 className="text-2xl font-bold">News Letter</h1>
                        <p className="italic text-gray-600">Your email address will not be this published. Required fields are News Today.</p>
                        <div className='flex items-center'>
                            <input
                            onChange={handleChange}
                            placeholder="Your email address"
                            value={emailValue}
                            className="border-black border-2 border-solid py-1 px-2 w-9/12 border-r-0 rounded-r-none rounded-md text-black"
                            type="email" />
                            <button
                            className="border-black border-2 border-solid rounded-md rounded-l-none my-3 py-1 px-2 "
                            onClick={handleSubmit}
                            >Submit</button>
                        </div>
                            <p className="italic text-gray-500">We hate spam as much as you do</p>
                    </div>
  )
}

export default EmailSubscribe