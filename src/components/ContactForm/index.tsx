'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '@/lib/actions/contact'

interface ContactFormProps {
    topOfPage?: boolean
    showTitle?: boolean
}

export default function ContactForm({ topOfPage, showTitle }: ContactFormProps) {
    const [agreed, setAgreed] = useState(false)
    const [state, formAction] = useActionState(submitContactForm, { success: false, errors: {} })
    const { pending } = useFormStatus()

    return (
        <div className={`isolate ${topOfPage ? 'px-6 py-24 sm:py-32 lg:px-8' : ''}`}>
            {showTitle && (
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className={`text-balance text-4xl ${topOfPage ? 'font-bold text-5xl sm:text-7xl' : 'font-semibold text-4xl sm:text-5xl'} tracking-tight text-white sm:text-5xl`}>Contact 4934</h2>
                    <p className="mt-8 text-xl/8 font-semibold text-gray-300">If you would like to get in touch with us, please fill out this form.</p>
                </div>
            )}
            <form action={formAction} className={`mx-auto ${showTitle ? 'mt-16 sm:mt-20' : ''} max-w-xl`}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                                required
                            />
                        </div>
                        {state.errors?.firstName && (
                            <p className="mt-2 text-sm text-red-500">{state.errors.firstName[0]}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                            />
                        </div>
                        {state.errors?.lastName && (
                            <p className="mt-2 text-sm text-red-500">{state.errors.lastName[0]}</p>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm/6 font-semibold text-white">
                            Organization
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                                required
                            />
                        </div>
                        {state.errors?.email && (
                            <p className="mt-2 text-sm text-red-500">{state.errors.email[0]}</p>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
              <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-gray-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/5 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#32b7b6] transition-all duration-300 ease-in-out"
                  required
              />
                        </div>
                        {state.errors?.message && (
                            <p className="mt-2 text-sm text-red-500">{state.errors.message[0]}</p>
                        )}
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-800 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32b7b6] data-[checked]:bg-gradient-to-r data-[checked]:from-[#32b7b6] data-[checked]:to-[#425389]"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="size-4 transform rounded-full bg-gray-200 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                />
                            </Switch>
                        </div>
                        <Label className="text-sm/6 text-gray-400">
                            By selecting this, you agree to our{' '}
                            <a href="https://4934.tech/policies/privacy-policy"
                               className="text-transparent bg-gradient-to-r from-[#32b7b6] to-[#1d243c] bg-clip-text transition-colors">
                                privacy&nbsp;policy
                            </a>
                            .
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={!agreed || pending}
                        className="relative w-full overflow-hidden rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32b7b6] transition-all duration-300 ease-in-out group disabled:cursor-not-allowed disabled:opacity-50"
                    >
            <span
                className="absolute inset-0 bg-gradient-to-br from-[#1d6a69] to-[#1d243c] transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-disabled:opacity-100"></span>
                        <span
                            className="absolute inset-0 bg-gradient-to-br from-[#32b7b6] to-[#425389] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-disabled:opacity-0"></span>
                        <span className="relative z-10">{pending ? 'Sending...' : 'Let\'s talk'}</span>
                    </button>
                </div>
                {state.success && (
                    <p className="mt-4 text-sm text-green-500 text-center">Thank you for your message. We&apos;ll be in touch soon!</p>
                )}
            </form>
        </div>
    )
}

