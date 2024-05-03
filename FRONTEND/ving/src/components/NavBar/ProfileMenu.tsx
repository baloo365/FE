'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import * as styles from './index.css'
import { FaUserCircle } from 'react-icons/fa';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import MenuItem from '../DropdownMenu/MenuItem';

export default function ProfileMenu({ onLogout }) {
  const userId = 1

  return (
    <div className={styles.profileMenuContainer}>
      <DropdownMenu 
        button={<button className={styles.avatarButton}><FaUserCircle size={32} /></button>}>
        <MenuItem>
          <Link href={`/setting/${userId}`}>세팅</Link>
        </MenuItem>
        <MenuItem>
          <Link href={`/profile/${userId}`}>내 채널</Link>
        </MenuItem>
        <MenuItem onClick={onLogout}>로그아웃</MenuItem>
      </DropdownMenu>
    </div>
  );
}