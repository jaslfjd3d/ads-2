import React from 'react'

const Post = () => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl hover:scale-105 rounded-xl transition-transform ease-in-out duration-500 mb-11">
                <figure className="px-5 pt-5">
                    <img
                        src="https://media.licdn.com/dms/image/D4D12AQHhJaOr-_E91A/article-cover_image-shrink_600_2000/0/1711904436166?e=2147483647&v=beta&t=xIDRalIv7K4iK23B0uDz0X0KPw3z9cAElo3NGxBtqS0"
                        className="rounded-xl aspect-video bg-gray-600 object-cover"
                    />
                </figure>
                <div className="card-body items-center text-center p-5">
                    <h2 className="card-title">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus illo iusto odit ut amet. Tempore, molestiae nulla assumenda corrupti perspiciatis a quasi suscipit, dolore sunt est officiis aspernatur rem.</p>
                </div>
            </div>
        </div>
    )
}

export default Post
