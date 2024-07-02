import React, { useCallback } from 'react';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HealthyEatingCard from './HealthyCard';
import {Healthycontext} from './HealthyEatingList';

import { useContext, useState, useEffect, useRef } from 'react';


function HealthyEatingDisplay() {


  const elementRef = useRef(null);

      
      
        const slideRight = (element) => {
          element.scrollLeft += 500;
        };
      
        const slideLeft = (element) => {
          element.scrollLeft -= 500;
        };
      
      
        return (
          <div className="Category">
        
            <div className="g-id">
              <h2 className="g-name">Healthy Eating</h2>
             
          <div className="relative">
            <IoChevronBackOutline
              onClick={() => slideLeft(elementRef.current)}
              className="back"
            />
          <div className="m-list" ref={elementRef}>
       
          
          <HealthyEatingCard  />
           
      
      </div>
            <IoChevronForwardOutline
              onClick={() => slideRight(elementRef.current)}
              className="forward"
            />
          </div>
          </div>
      
          </div>
        );
      }
      
      export default HealthyEatingDisplay;
      

