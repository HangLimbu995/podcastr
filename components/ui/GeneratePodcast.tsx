import { GeneratePodcastProps } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Textarea } from "./textarea";
import { Loader } from "lucide-react";
import { Button } from "./button";

const useGeneratePodcast = ({
  setAudio,
  voiceType,
  voicePrompt,
  setAudioStorageId,
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePodcast = async () => {
    setIsGenerating(true);
    setAudio("");

    if (!voicePrompt) {
      // TODO: show error message via toast
      return setIsGenerating(false);
    }

    try {
      //   const response = await getPodcastAudio({
      //     voice: voiceType,
      //     input: voicePrompt,
      //   });
    } catch (error) {
      console.error("Error geenrating podcast", error);
      // todo: show error message via toast
      setIsGenerating(false);
    }
  };

  return { isGenerating, GeneratePodcast };
};

const GeneratePodcast = (props: GeneratePodcastProps) => {
  const { isGenerating, GeneratePodcast } = useGeneratePodcast(props);

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to generate Podcast
        </Label>
        <Textarea
          className="input-class font-light focus-visible:ring-offset-orange-1"
          placeholder="Provide text to generate audio"
          rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>

      <div className="mt-10 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 py-4 text-white-1 font-bold"
        >
          {isGenerating ? (
            <>
              Generating
              <Loader size={20} className="animate-spin mr-2" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audio && (
        <audio
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </div>
  );
};

export default GeneratePodcast;
