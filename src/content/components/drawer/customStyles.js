export const customStyles = `<div class="drawer-container h-[calc(100vh-16px)] backdrop-blurred scroll-inside">
    <button class="button primary flat toggle-drawer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">See Event <i data-lucide="calendar-days" class="size-4"></i></button>
    <div class="backdrop"></div>
    <div class="drawer-wrapper">
        <section class="drawer sm:!m-2 !rounded-[14px]">
            <header class="drawer-header !absolute top-0 inset-x-0 z-50 flex flex-row gap-2 !px-2 !py-2 border-b border-[hsla(var(--default-200)_/_50)] justify-between bg-[hsla(var(--content-1))_/_50] backdrop-saturate-150 backdrop-blur-lg rounded-t-[14px]">
                <button class="button size-sm !text-[hsl(var(--default-400))] light" data-icon-only data-close-drawer>
                    <i data-lucide="chevrons-right" class="size-5"></i>
                </button>
                <div class="w-full flex justify-start gap-2">
                    <button class="button size-sm !text-sm !font-medium !text-[hsl(var(--default-500))] flat">
                        <i data-lucide="copy" class="size-4"></i>
                        Copy Link
                    </button>
                    <button class="button size-sm !text-sm !font-medium !text-[hsl(var(--default-500))] flat">
                        Event Page
                        <i data-lucide="arrow-up-right" class="size-4"></i>
                    </button>
                </div>
                <div class="flex gap-1 items-center">
                    <button class="button !text-[hsl(var(--default-500))] size-sm flat" data-icon-only>
                        <i data-lucide="chevron-up" class="size-4"></i>
                    </button>
                    <button class="button !text-[hsl(var(--default-500))] size-sm flat" data-icon-only>
                        <i data-lucide="chevron-down" class="size-4"></i>
                    </button>
                </div>
            </header>
            <div class="drawer-body !pt-16">
                <div class="flex w-full justify-center items-center pt-4">
                    <div class="img-wrapper" data-blurred-image="true">
                        <div class="zoomed-wrapper">
                            <img src="https://thumbs.dreamstime.com/b/golden-gate-bridge-clear-sky-artistic-ai-generated-iconic-san-francisco-landmark-sunset-surreal-vibrant-concept-332048417.jpg" alt="Event Image" class="hover:!scale-110 aspect-square size-[300px]"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 py-4">
                    <h1 class="text-2xl font-bold leading-7">SF Bay Area Meetup in November</h1>
                    <p class="text-sm text-[hsl(var(--default-500))]">
                        555 California St, San Francisco, CA 94103
                    </p>
                    <div class="flex mt-4 flex-col gap-3">
                        <div class="flex gap-3 items-center">
                            <div class="flex-none border border-[hsla(var(--default-200)_/_50)] rounded-lg text-center w-11 overflow-hidden">
                                <div class="text-xs bg-[hsl(var(--default-100))] py-0.5 text-[hsl(var(--default-500))]">Nov</div>
                                <div class="flex items-center justify-center font-semibold text-base h-6 text-[hsl(var(--default-500))]">19</div>
                            </div>
                            <div class="flex flex-col gap-0.5">
                                <p class="text-base text-inherit font-medium">Wednesday, December 19</p>
                                <p class="text-sm text-[hsl(var(--default-500))]">5:00 PM - 9:00 PM PST</p>
                            </div>
                        </div>
                        <div class="flex gap-3 items-center">
                            <div class="flex items-center justify-center border border-[hsla(var(--default-200)_/_50)] rounded-lg size-11">
                                <i data-lucide="map-pin" class="size-5 text-[hsl(var(--default-500))]"></i>
                            </div>
                            <div class="flex flex-col gap-0.5">
                                <a href="https://www.google.com/maps/place/555+California+St,+San+Francisco,+CA+94103" class="link group gap-x-0.5 text-base foreground font-medium">
                                    555 California St suite 500
                                    <i data-lucide="arrow-up-right" class="size-4 text-[hsl(var(--default-400))] group-hover:!text-inherit transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></i>
                                </a>
                                <p class="text-sm text-[hsl(var(--default-500))]">San Francisco, California</p>
                            </div>
                        </div>
                        <div class="flex flex-col mt-4 gap-3 items-start">
                            <span class="text-base font-medium">About the event</span>
                            <div class="text-base text-[hsl(var(--default-500))] flex flex-col gap-2">
                                <p>
                                    Hey Bay Area! We are excited to announce our next meetup on Wednesday, December 19th.
                                </p>
                                <p>
                                    Join us for an evening of insightful discussions and hands-on workshops focused on the latest developments in web development and design. Our featured speakers will share their experiences with modern frontend frameworks, responsive design patterns, and emerging web technologies. You&apos;ll have the opportunity to network with fellow developers and designers while enjoying refreshments and snacks.
                                </p>
                                <p>
                                    During the main session, we&apos;ll dive deep into practical examples of building scalable applications, exploring best practices for component architecture, and understanding advanced state management techniques. Our interactive workshop portion will let you apply these concepts directly, with experienced mentors available to provide guidance and answer your questions. Whether you&apos;re a seasoned developer or just starting your journey, you&apos;ll find valuable takeaways from this session.
                                </p>
                                <p class="mt-4">
                                    Brought to you by the <a href="https://luxeyui.vercel.app" class="link !text-[hsl(var(--default-700))]">LuxeyUI author</a>.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col mt-4 gap-3 items-start">
                            <span class="text-sm text-[hsl(var(--default-500))]">Hosted By</span>
                            <div class="flex gap-2 items-center">
                                <div class="avatar size-sm">
                                    <img src="https://luxeyui.vercel.app/android-chrome-192x192.png" alt="LuxeyUI"/>
                                </div>
                                <span class="text-sm text-[hsl(var(--default-500))]">LuxeyUI Author</span>
                            </div>
                        </div>
                        <div class="flex flex-col mt-4 gap-3 items-start">
                            <span class="text-sm text-[hsl(var(--default-500))]">105 Going</span>
                            <div class="flex gap-2 items-center">
                                <div class="avatar-group pl-2" data-total="101" data-max="4">
                                    <div class="avatar default size-sm !text-[hsl(var(--default-500))] !text-xs !bg-[hsl(var(--default-100))] hover:!translate-x-0 last:hover:!-translate-x-3" data-bordered>
                                        <img src="https://i.pravatar.cc/150?img=20" alt="Avatar">
                                    </div>
                                    <div class="avatar default size-sm hover:!translate-x-0" data-bordered>
                                        <img src="https://i.pravatar.cc/150?img=21" alt="Avatar">
                                    </div>
                                    <div class="avatar default size-sm hover:!translate-x-0" data-bordered>
                                        <img src="https://i.pravatar.cc/150?img=22" alt="Avatar">
                                    </div>
                                    <div class="avatar default size-sm hover:!translate-x-0" data-bordered>
                                        <img src="https://i.pravatar.cc/150?img=23" alt="Avatar">
                                    </div>
                                    <div class="avatar default size-sm hover:!translate-x-0" data-bordered>
                                        <img src="https://i.pravatar.cc/150?img=24" alt="Avatar">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="drawer-footer flex !flex-col !gap-1">
                <a href="mailto:atifalijaedi@gmail.com" class="link !text-[hsl(var(--default-400))] size-sm">Contact the host</a>
                <a href="mailto:atifalijaedi@gmail.com" class="link !text-[hsl(var(--default-400))] size-sm">Report event</a>
            </footer>
        </section>
    </div>
</div>`;
