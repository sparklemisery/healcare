
const ViewFeedback = () => {
    const appointment = {
        patientName: "Trung Phan",
        phone: "0905",
        email: "abc@gmail.com",
        dateBooking: "23/12/04",
        dob: "23/12/04",
        picture: "https://via.placeholder.com/150", // Placeholder image URL
        notes: "Please arrive 15 minutes early for your appointment.",
        status: "Confirmed"
    };

    const feedbacks = [
        {
            user: "Nguyen Van A",
            rating: 5,
            comment: "Great experience! The staff was very helpful.",
            date: "23/12/2024",
            image: "https://i.pinimg.com/564x/f4/67/6c/f4676ce41be2d23260f7482d82c5d953.jpg"
        },
        {
            user: "Le Thi B",
            rating: 4,
            comment: "Overall good, but the waiting time was a bit long.",
            date: "23/12/2024",
            image: "https://i.pinimg.com/564x/f4/67/6c/f4676ce41be2d23260f7482d82c5d953.jpg"
        },
        {
            user: "Tran Van C",
            rating: 5,
            comment: "Highly recommended! The doctor was very professional.",
            date: "23/12/2024",
            image: "https://i.pinimg.com/564x/f4/67/6c/f4676ce41be2d23260f7482d82c5d953.jpg"
        },
        {
            user: "Nguyen Van A",
            rating: 5,
            comment: "Great experience! The staff was very helpful.",
            date: "23/12/2024",
            image: "https://i.pinimg.com/564x/f4/67/6c/f4676ce41be2d23260f7482d82c5d953.jpg"
        },
    ];

    return (

        <div className="container mx-auto mt-10 px-52 ">
            {feedbacks.map((item, index) => {
                return <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                class="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                alt="Helene Engels" />{item.user}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                                title="June 23rd, 2022">{item.date}</time></p>
                        </div>
                        <button id={"dropdownButton" + index} data-dropdown-toggle={"dropdown" + index}
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>

                        <div id={"dropdown" + index}
                            class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton">

                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-500 dark:text-gray-400">{item.comment}</p>
                    <div class="flex items-center mt-4 space-x-4">
                        <button type="button"
                            class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                            <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
            })}


        </div>
    );
};

export default ViewFeedback;
