import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import React from "react";
import { Separator } from "~/components/ui/separator";
import UploadFile from "../upload";

const Examples = () => {
  //this component will display some tabs with different examples
  return (
    <div>
      <div>
        <h1 className="mb-2 text-2xl">Examples</h1>
        <h2 className="text-md text-muted-foreground">
          On this screen you see some examples of popular flows in SaaS
          applications
        </h2>
      </div>
      <Separator className="my-2 mb-8" />
      <Tabs defaultValue="upload" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <UploadFile />
        </TabsContent>
        <TabsContent value="ai">Under construction</TabsContent>
      </Tabs>
    </div>
  );
};

export default Examples;
