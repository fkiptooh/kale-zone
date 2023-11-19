"use client";
import { useUploadModal } from "@/hooks/useUploadModal";
import { Modal } from "./modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

export const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      // TODO: Reset upload form
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // upload to supabase;
  };
  return (
    <Modal
      title="Upload a song"
      description="Upload your favorite song"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 "
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("autho", { required: true })}
          placeholder="Song artist"
        />
        <div>
          <div className="pb-1">Select a song</div>
          <Input
            id="song"
            disabled={isLoading}
            accept=".mp3"
            type="file"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an image</div>
          <Input
            id="image"
            disabled={isLoading}
            accept="image/*"
            type="file"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};
