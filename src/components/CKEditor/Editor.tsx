import React from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface EditorProps {
    value?: string
    onChangeValue: (value: string) => void
    setError: (value: boolean) => void
}

const Editor: React.FC<EditorProps> = ({value, setError, onChangeValue, }) => {

    return (
        <div className="Editor">
            <CKEditor
                editor={ClassicEditor}
                data={value}
                config={{
                    link: {addTargetToExternalLinks: true}
                }}
                onChange={(event, editor) => {
                    setError(false)
                    const data = editor.getData();
                    onChangeValue(data);
                }}
            />
        </div>
    );
};

export default Editor;
