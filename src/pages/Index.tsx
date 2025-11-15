import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const logos = [
  {
    id: 1,
    title: 'Современный бизнес',
    category: 'Технологии',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/746b9236-ae58-46ed-9ef1-322092d93064.jpg',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Креативное агентство',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/ac64d6c3-375e-4ad1-b2fe-effd3d66c119.jpg',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 3,
    title: 'Корпоративный стиль',
    category: 'Бизнес',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/bc966cc5-b020-41dd-8c20-be8701b8201c.jpg',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 4,
    title: 'Минимализм Pro',
    category: 'Технологии',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/746b9236-ae58-46ed-9ef1-322092d93064.jpg',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 5,
    title: 'Элегантность',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/ac64d6c3-375e-4ad1-b2fe-effd3d66c119.jpg',
    color: 'from-rose-400 to-pink-600'
  },
  {
    id: 6,
    title: 'Геометрия',
    category: 'Бизнес',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/bc966cc5-b020-41dd-8c20-be8701b8201c.jpg',
    color: 'from-indigo-400 to-purple-600'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const categories = ['Все', 'Технологии', 'Дизайн', 'Бизнес'];
  
  const filteredLogos = selectedCategory === 'Все' 
    ? logos 
    : logos.filter(logo => logo.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <header className="border-b border-border/30 backdrop-blur-sm bg-background/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
              Creative Portfolio
            </h1>
            <div className="flex gap-8">
              <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-110">
                Работы
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-all hover:scale-110">
                Обо мне
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-all hover:scale-110">
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-slide-up">
              <span className="text-accent text-6xl handwritten animate-wiggle inline-block">✨</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 animate-slide-up leading-tight">
              Логотипы, которые запоминаются
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Создаю уникальные визуальные идентичности, которые выделяют бренды среди конкурентов
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all hover:scale-105 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50' 
                    : 'border-border/50 hover:border-primary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLogos.map((logo, index) => {
              const isEven = index % 2 === 0;
              const isCenterColumn = index % 3 === 1;
              
              return (
                <Card
                  key={logo.id}
                  className={`group relative overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 animate-scale-in ${
                    isCenterColumn ? 'lg:mt-12' : ''
                  } ${isEven ? 'md:rotate-1' : 'md:-rotate-1'} hover:rotate-0`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="aspect-square overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-30 group-hover:opacity-50 transition-opacity mix-blend-overlay`}></div>
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                    />
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <div className="text-xs font-medium text-accent mb-2 handwritten text-2xl">
                      {logo.category}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all">
                      {logo.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180">
                    <Icon name="Eye" size={20} className="text-primary" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-8xl handwritten text-primary animate-float inline-block">🎨</span>
            </div>
            <h2 className="text-5xl font-heading font-bold text-center mb-12 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Креативность без границ
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="animate-fade-in backdrop-blur-sm bg-card/30 p-6 rounded-2xl border border-border/30">
                Более 100 созданных логотипов для стартапов и корпораций. Каждый проект — это история, 
                рассказанная через форму, цвет и композицию.
              </p>
              <p className="animate-fade-in backdrop-blur-sm bg-card/30 p-6 rounded-2xl border border-border/30" style={{ animationDelay: '100ms' }}>
                Верю в силу нестандартных решений. Ваш бренд заслуживает быть уникальным.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                Давайте создадим что-то особенное
              </h2>
              <p className="text-xl text-muted-foreground handwritten">
                Напишите мне, и я превращу вашу идею в реальность
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-sm bg-card/30 p-8 rounded-3xl border border-border/30">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/50 border-border/50 focus:border-primary transition-all group-hover:border-primary/50"
                  required
                />
              </div>
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background/50 border-border/50 focus:border-secondary transition-all group-hover:border-secondary/50"
                  required
                />
              </div>
              <div className="relative group">
                <Textarea
                  placeholder="Расскажите о вашей идее..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[180px] bg-background/50 border-border/50 focus:border-accent transition-all group-hover:border-accent/50"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 text-lg py-6"
                size="lg"
              >
                <span className="mr-2">Отправить</span>
                <Icon name="Sparkles" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/30 py-12 backdrop-blur-sm bg-background/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground handwritten text-xl">
              Made with magic ✨
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform hover:rotate-12">
                <Icon name="Instagram" size={20} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform hover:rotate-12">
                <Icon name="Linkedin" size={20} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform hover:rotate-12">
                <Icon name="Mail" size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
