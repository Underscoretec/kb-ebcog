import { CheckIcon } from '@heroicons/react/24/solid'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function CartTabs({steps}:any) {
    return (
        <div className="lg:border-b lg:border-t lg:border-gray-200">
            <nav aria-label="Progress" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ol role="list" className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
                    {steps.map((step:any, stepIdx:any) => (
                        <li key={step.id} className="relative overflow-hidden lg:flex-1">
                            <div className={classNames(stepIdx === 0 ? 'rounded-t-md border-b-0' : '', stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '', 'overflow-hidden border border-gray-200 lg:border-0',)}>
                                {step.status === 'complete' ? (
                                    <a href={step.href} className="group">
                                        <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" />
                                        <span className={classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium',)}>
                                            <span className="shrink-0">
                                                <span className="flex size-10 items-center justify-center rounded-full bg-[#312E81]">
                                                    <CheckIcon aria-hidden="true" className="size-6 text-white" />
                                                </span>
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                ) : step.status === 'current' ? (
                                    <a href={step.href} aria-current="step">
                                        <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-[#312E81] lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" />
                                        <span className={classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium', )}>
                                            <span className="shrink-0">
                                                <span className="flex size-10 items-center justify-center rounded-full border-2 border-[#312E81]">
                                                    <span className="text-[#312E81]">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-[#312E81]">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                ) : (
                                    <a href={step.href} className="group">
                                        <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full" />
                                        <span className={classNames( stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium', )}>
                                            <span className="shrink-0">
                                                <span className="flex size-10 items-center justify-center rounded-full border-2 border-gray-300">
                                                    <span className="text-gray-500">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-gray-500">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                )}

                                {stepIdx !== 0 ? (
                                    <>
                                        {/* Separator */}
                                        <div aria-hidden="true" className="absolute inset-0 left-0 top-0 hidden w-3 lg:block">
                                            <svg
                                                fill="none"
                                                viewBox="0 0 12 82"
                                                preserveAspectRatio="none"
                                                className="size-full text-gray-300"
                                            >
                                                <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                                            </svg>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}