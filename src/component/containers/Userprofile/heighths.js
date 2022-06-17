export default function Heighths() {
    return (
        <div class="my-6 grid lg:grid-cols-5 grid-cols-3 gap-2 hover:text-yellow-700 uk-link-reset">
            <a href="#">
                <div class="bg-gray-100 border-4 border-dashed flex flex-col h-full items-center justify-center relative rounded-2xl w-full">
                    <i class="text-4xl uil-plus-circle"></i> <span> Add new </span>
                </div>
            </a>
            <a href="#story-modal" uk-toggle>
                <img src="assets/images/avatars/avatar-lg-1.jpg" alt="" class="w-full lg:h-60 h-40 rounded-md object-cover" />
            </a>
            <a href="#story-modal" uk-toggle>
                <img src="assets/images/post/img2.jpg" alt="" class="w-full lg:h-60 h-40 rounded-md object-cover" />
            </a>
            <a href="#story-modal" uk-toggle>
                <img src="assets/images/post/img7.jpg" alt="" class="w-full lg:h-60 h-40 rounded-md object-cover uk-visible@s" />
            </a>
        </div>
    )
}