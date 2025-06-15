
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">بعض أعمالنا</h2>
        <div className="flex justify-center">
            <Card className="overflow-hidden shadow-lg w-full max-w-4xl border-4 border-primary/20 rounded-xl">
                <CardContent className="p-0">
                    <img 
                        src="/lovable-uploads/42cc6b97-5677-4e3e-bf10-f6ee793ef0dd.png" 
                        alt="أعمال ليزر متنوعة" 
                        className="w-full h-full object-cover"
                    />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
