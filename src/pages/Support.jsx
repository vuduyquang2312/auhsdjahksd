import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';

export default function Support() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleContactClick = () => {
        setIsFormVisible(true); // Hiển thị form khi người dùng nhấn nút liên hệ
    };

    return (
        <div className='ml-0 md:ml-4 p-4 flex flex-col justify-center bg-white text-gray-500 mt-16'>
            {/* Tiêu đề liên hệ */}
            <div className='flex justify-center py-4'>
                <h2 className='text-lg md:text-xl text-gray-600 uppercase'>Liên hệ với chúng tôi</h2>
            </div>

            {/* Mô tả liên hệ */}
            <div className='flex justify-center'>
                <p className='text-sm md:text-base'>
                    Nếu không tìm thấy câu trả lời của bạn trong những câu hỏi ở dưới hoặc bạn có thắc mắc hay cần phản ánh về bất cứ điều gì<br />Hãy liên hệ chúng tôi qua Zalo hoặc Số điện thoại đang hiển thị ở góc phải màn hình hoặc liên hệ chúng tôi ở nút Liên hệ bên dưới
                </p>
            </div>

            {/* Nút liên hệ */}
            <div className='flex justify-center mt-4'>
                <button
                    onClick={handleContactClick}
                    className='mt-4 inline-flex text-center justify-center text-sm md:text-base items-center w-full md:w-72 px-4 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
                >
                    <BiSend className='mr-2' />
                    Liên hệ
                </button>
            </div>

            {/* Hiển thị form khi người dùng nhấn vào nút liên hệ */}
            {isFormVisible ? (
                <div className='mt-8'>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Họ và Tên
                            </label>
                            <input
                                type='text'
                                id='name'
                                placeholder='Nhập họ và tên'
                                className='w-full px-4 py-2 mt-4 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div>
                            <label htmlFor='phone' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Số điện thoại
                            </label>
                            <input
                                type='text'
                                id='phone'
                                placeholder='Nhập số điện thoại'
                                className='w-full px-4 py-2 mt-4 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                placeholder='Nhập email của bạn'
                                className='w-full px-4 py-2 mt-4 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Lời nhắn
                            </label>
                            <textarea
                                id='message'
                                placeholder='Nhập lời nhắn của bạn'
                                className='w-full px-4 py-2 mt-4 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='mt-4 inline-flex text-center justify-center text-sm md:text-base items-center w-full md:w-72 px-4 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
                            >
                                Gửi
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                // Hiển thị câu hỏi thường gặp khi form chưa được hiển thị
                <div className='mt-12 space-y-4'>
                    <div className='flex justify-center'>
                        <h2 className='text-lg md:text-xl uppercase'>Câu hỏi thường gặp</h2>
                    </div>
                    <div>
                        <h3 className='text-sm md:text-base font-semibold text-gray-600'>Làm sao để biết chuyến đi đã được xác nhận?</h3>
                        <p className='text-sm md:text-base mt-2'>
                            - Hãy chọn cho mình một chuyến đi còn chỗ trống<br />
                            - Gửi yêu cầu đặt chuyến sớm nhất có thể<br />
                            - Chờ đợi tài xế xác nhận<br />
                            - Sau khi xác nhận, hành trình của bạn sẽ hiện lên trên app và bạn sẽ nhận được thông báo<br />
                            - Nếu tài xế không xác nhận, bạn có thể hủy yêu cầu và tìm chuyến khác<br />
                        </p>
                    </div>
                    <div>
                        <h3 className='text-sm md:text-base font-semibold text-gray-600'>Hủy chuyến có mất phí không?</h3>
                        <p className='text-sm md:text-base mt-2'>
                            Không, hủy chuyến trên datxenhanh là hoàn toàn không mất phí. Bạn sẽ không hủy được chuyến sau khi chuyến đi bắt đầu.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-sm md:text-base font-semibold text-gray-700'>Có thể thanh toán trực tiếp qua datxenhanh không?</h3>
                        <p className='text-sm md:text-base'>
                            datxenhanh sẽ cho phép thanh toán trực tiếp trên nền tảng trong tương lai gần. Hiện tại XeDiChung vẫn chưa hỗ trợ việc thanh toán trực tuyến, bạn hãy chủ động trao đổi và thống nhất hình thức thanh toán với tài xế nhé.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
