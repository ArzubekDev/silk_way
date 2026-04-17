'use client'
import { Controller, FieldValues, Path, Control } from 'react-hook-form';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import style from './style.module.scss';

export interface EditorProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
}

const EditorController = <T extends FieldValues>({ name, control, label }: EditorProps<T>) => {
  return (
    <div className={style.formItem}>
      {label && <label className={style.label}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const charCount = field.value?.replace(/<[^>]*>/g, '').length || 0;

          return (
            <>
              <ReactQuill
                theme="snow"
                value={field.value || ''}
                onChange={(content, delta, source, editor) => {
                  const text = editor.getText().trim();
                  if (text.length <= 1000) {
                    field.onChange(content);
                  }
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                {error && <span style={{ color: 'red', fontSize: '12px' }}>{error.message}</span>}
                <span style={{ fontSize: '12px', color: charCount >= 1000 ? 'red' : '#999' }}>
                  Символдор: {charCount} / 1000
                </span>
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default EditorController;
