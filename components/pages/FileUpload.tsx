import React, { useState, useRef } from 'react';
import { Controller } from 'react-hook-form';

import style from './style.module.scss';
import IconUploadImg from './IconUpload';
import IconEdit from './IconEdit';

const LogoUpload = ({ control }: { control: any }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<'image' | 'video' | null>(null); // Файлдын түрүн сактоо
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={style.logo}>
      {/* ... мазмун бөлүгү ... */}

      <Controller
        name="logo"
        control={control}
        render={({ field: { onChange } }) => (
          <div className={style.uploadWrapper}>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*,video/*" // Видеону да кабыл алуу
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const isVideo = file.type.startsWith('video/');
                  setFileType(isVideo ? 'video' : 'image');
                  
                  const fileUrl = URL.createObjectURL(file);
                  setPreview(fileUrl);
                  onChange(file);
                }
              }}
            />

            <div className={style.uploadContainer} onClick={handleContainerClick}>
              {preview ? (
                fileType === 'video' ? (
                  <video 
                    src={preview} 
                    className={style.previewImg} 
                    autoPlay 
                    muted 
                    loop 
                  />
                ) : (
                  <img src={preview} alt="Preview" className={style.previewImg} />
                )
              ) : (
                <IconUploadImg className={style.iconUpload} />
              )}
              
              <span className={style.editContainer}>
                <IconEdit className={style.editIcon} />
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LogoUpload