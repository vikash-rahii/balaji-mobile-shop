import React from 'react';
import {repairServices} from '../assets/assets'
import { CiClock2 } from 'react-icons/ci';

function Service() {
  return (
    <section id='services' className='relative min-h-screen bg-orange-50 flex
       overflow-hidden'>

    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Our Services</h2>
        <p className='text-gray-500'>Professional mobile repair and sales services with quality guarantee </p>

      </div>
      <div className='mb-16 '>
        <h3 className='text-3xl font-bold text-center mb-8 text-red-900'>Mobile Repair Services</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            repairServices.map((service,index)=>(
              <div key={index} className='bg-white shadow-md rounded-xl p-6  hover:scale-105 transition relative'>
                {service.popular && (
                  <span className='absolute top-2 right-2 bg-red-900 text-white text-xs font-bold px-2 py-1 rounded'>Popular</span>

                )}
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-orange-100 rounded-lg'>
                    <service.Icon size={22}/>
                  </div>
                  <div className='block items-center gap-2 mt-1'>
                    <h4 className='font-semibold text-lg'>{service.title}</h4>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                      <CiClock2 className='h-4 w-4'/>
                      <span>{service.time}</span>
                    </div>
                  </div>
                  </div>
                  <p className='text-gray-600 mb-4 text-md'>{service.description}</p>
                  <div className='flex justify-between items-center'>
                    <span className='text-xl font-bold text-red-900'>{service.price}</span>
                    <a
                      href={`https://wa.me/918873338001?text=Hi%20I%20want%20to%20book%20${encodeURIComponent(service.title)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='px-2 py-2  border  border-red-900 rounded-lg text-red-900 hover:bg-yellow-200 hover:text-red-900 transition inline-block'
                    >
                      Book Now
                    </a>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='text-center mt-12'>
        <div className='bg-white shadow-md rounded-xl p-8 max-w-2xl mx-auto shadow-card'>
          <h3 className='text-2xl font-bold mb-4'>Why Choose Us?</h3> 
          <div className='grid sm:grid-cols-3  gap-6 text-center'>
            <div>
              <div className='text-3xl font-bold text-primary mb-2'>6M+</div>
              <div className='text-sm text-muted-foreground'>Warranty</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-primary mb-2'>100%</div>
              <div className='text-sm text-muted-foreground'>Original Parts</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-primary mb-2'>24/7</div>
              <div className='text-sm text-muted-foreground'>Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-16'>
        <div className='bg-orange-100 rounded-2xl p-8'>
          <h3 className='text-xl sm:text-2xl font-bold mb-4 text-red-900'>Need Immediate Assistance?</h3>
          <p className='text-gray-600 mb-6 text-sm sm:text-base'>Call us now for emergency repairs or urgent mobile needs</p>
           <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
             <a href="tel:+918873338001" className='px-6 py-3 bg-red-900 text-white rounded-lg hover:bg-red-800 transition font-semibold text-center w-full sm:w-auto'>Call Now: +91-8873338001</a>
             <a href="https://wa.me/918873338001?text=Hi%20I%20want%20emergency%20mobile%20repair" rel='noopener noreferrer' target='_blank' className='px-6 py-3 border border-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition text-center w-full sm:w-auto'>WhatsApp Us</a>
           </div>
       
        </div>
      </div>



      
    </div>

    </section>
  )
}

export default Service
