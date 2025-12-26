import React from 'react';

// NOTA IMPORTANTE: 
// Se os vídeos têm "Restrição de Domínio" no YouTube Studio, eles NÃO funcionarão 
// em 'localhost'. Eles só funcionarão quando o site estiver no domínio correto.
const videos = [
  { id: 'teJbS8-kGvI', title: 'Técnicas de Mixagem Vocal' },
  { id: 'P1k6613y-xY', title: 'Analógico vs Digital' },
  { id: '7b1Kmq-T8X0', title: 'Masterização Profissional' },
  { id: 'MMG-J543l5g', title: 'Console SSL Workflow' },
  { id: 'XjKk81k45b4', title: 'Compressores Clássicos' },
  { id: 'fvL9B_qK-hQ', title: 'Dicas de Equalização' },
  { id: 'ysz5S6PUM-U', title: 'Sessão de Estúdio' }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 reveal">
           <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase mb-2">
               Portfólio<span className="text-neutral-700">.</span>
           </h2>
           <p className="text-neutral-500 font-display tracking-widest uppercase">Trabalhos Selecionados</p>
        </div>

        {/* YouTube Grid - Layout Flex para centralizar o último item */}
        <div className="mb-24 reveal delay-100">
          <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-8 border-l-4 border-white pl-4">Vídeos</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="group relative bg-neutral-900 aspect-video overflow-hidden border border-white/10 hover:border-white/50 transition-colors w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)]"
              >
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Section */}
        <div className="reveal delay-200">
          <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-8 border-l-4 border-white pl-4">Álbuns</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 border border-white/10 p-1 hover:border-white/30 transition-colors rounded-xl overflow-hidden shadow-lg h-[160px]">
                <iframe 
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/album/3X5wz47oetvo2EMcViUnWs?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="Spotify Album 1"
                ></iframe>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-1 hover:border-white/30 transition-colors rounded-xl overflow-hidden shadow-lg h-[160px]">
                <iframe 
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/album/1SMRpldg9K9lWoGw0r1J2w?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="Spotify Album 2"
                ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;