'use client'
import { useForm } from 'react-hook-form';
import { Button, Form } from 'antd';
import style from './Profile.module.scss';
import InputController from '../InputController';
import dynamic from 'next/dynamic';
import type { EditorProps } from '../EditorController';

const EditorController = dynamic<EditorProps<IProfileForm>>(() => import('../EditorController'), { 
  ssr: false,
  loading: () => <div style={{ height: '200px', background: '#f0f0f0' }}>Загрузка редактора...</div>
});

interface IProfileForm {
  name: string;
  surname: string;
  bio: string;
}

const ProfileForm = () => {
  const { handleSubmit, control } = useForm<IProfileForm>({
    defaultValues: {
      name: "",
      surname: "",
      bio: "" // Бул жерге HTML текст (defaultValue) келсе болот
    }
  });

  const onFinish = (data: IProfileForm) => {
    // Маалымат базасына "bio" HTML форматта (мисалы: <p><strong>Текст</strong></p>) барат
    console.log("Жаңы маалыматтар:", data);
  };

  return (
    <section className={style.profile}>
      <div className={style.card}>
        <h2 className={style.title}>Редактировать профиль</h2>
        <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
          <InputController
            id='name'
            name='name'
            label='Имя'
            control={control}
            placeholder='Имя...'
          />
          <InputController
            id='surname'
            name='surname'
            label='Фамилия'
            control={control}
            placeholder='Фамилия...'
          />
          
          {/* Тимлиддин тапшырмасы: TextArea ордуна Quill Editor */}
          <EditorController
            name='bio'
            label='Биография'
            control={control}
          />

          <div className={style.actions}>
            <Button type="primary" htmlType="submit" block size="large" style={{ marginTop: '20px' }}>
              Сохранить изменения
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ProfileForm;