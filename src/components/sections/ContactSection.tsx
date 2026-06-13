import { FaPhone, FaLine, FaFacebookF } from 'react-icons/fa6';
import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-navy-dark text-white text-center" id="contact">
      <Container>
        <h2 className="text-3xl font-bold mb-6">ติดต่อเราด่วน</h2>
        <p className="text-text-gray mb-10 max-w-xl mx-auto">
          พร้อมให้บริการ 24 ชั่วโมง ทั่วกรุงเทพ ปริมณฑล และต่างจังหวัด สนใจใช้บริการ หรือสอบถามราคา ประเมินฟรี
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-lava/10 text-orange-lava flex items-center justify-center text-3xl rounded-full mb-4">
              <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
            </div>
            <h3 className="text-xl font-bold mb-2">โทรศัพท์</h3>
            <p className="text-lg text-white font-medium mb-4">095-801-0958</p>
            <Button href="tel:0958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT เพื่อจองคิวรถรับจ้าง" className="w-full">โทรเลย</Button>
          </div>
          <div className="glass-card p-8 flex flex-col items-center border-line-green/30">
            <div className="w-16 h-16 bg-line-green/10 text-line-green flex items-center justify-center text-3xl rounded-full mb-4">
              <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
            </div>
            <h3 className="text-xl font-bold mb-2">LINE Official</h3>
            <p className="text-lg text-white font-medium mb-4">@952yyanc</p>
            <Button variant="line" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" aria-label="แอดไลน์ N&M18 TRANSPORT เพื่อประเมินราคาค่าขนย้ายฟรี" className="w-full">แอดไลน์</Button>
          </div>
          <div className="glass-card p-8 flex flex-col items-center border-fb-blue/30">
            <div className="w-16 h-16 bg-fb-blue/10 text-fb-blue flex items-center justify-center text-3xl rounded-full mb-4">
              <FaFacebookF aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
            </div>
            <h3 className="text-xl font-bold mb-2">Facebook</h3>
            <p className="text-lg text-white font-medium mb-4">ทักแชทเพจ</p>
            <Button variant="blue" href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" aria-label="ส่งข้อความผ่าน Facebook N&M18 TRANSPORT" className="w-full">ส่งข้อความ</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
