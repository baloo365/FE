'use client'

import React from "react";
import { FaRegBell } from "react-icons/fa";
import IconButton from "../Button/IconButton";
import useModal from "@/hooks/useModal";
import SmallButton from "../Button/SmallButton";
import { IoIosClose } from "react-icons/io";
import * as styles from './index.css'
import { bold } from "@/styles/fonts.css";

export default function Notifer() {
  const { isOpen, open, close } = useModal();

  return (
    <div>
      <IconButton icon={FaRegBell} onClick={open} />
      {isOpen && (
        <div className={styles.modalBackdrop} onClick={close}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.closeBtnBox}>
              <span className={bold}>알림함</span>
              <IconButton
                icon={IoIosClose}
                onClick={close}
              />              
            </div>
            <p>알림모ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴ달</p>
          </div>
        </div>
      )}
    </div>
  );
}