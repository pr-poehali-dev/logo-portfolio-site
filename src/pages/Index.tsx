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
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/746b9236-ae58-46ed-9ef1-322092d93064.jpg'
  },
  {
    id: 2,
    title: 'Креативное агентство',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/ac64d6c3-375e-4ad1-b2fe-effd3d66c119.jpg'
  },
  {
    id: 3,
    title: 'Корпоративный стиль',
    category: 'Бизнес',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/bc966cc5-b020-41dd-8c20-be8701b8201c.jpg'
  },
  {
    id: 4,
    title: 'Минимализм Pro',
    category: 'Технологии',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/746b9236-ae58-46ed-9ef1-322092d93064.jpg'
  },
  {
    id: 5,
    title: 'Элегантность',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/ac64d6c3-375e-4ad1-b2fe-effd3d66c119.jpg'
  },
  {
    id: 6,
    title: 'Геометрия',
    category: 'Бизнес',
    image: 'https://cdn.poehali.dev/projects/b3063993-3242-4521-a7c0-de1df47e51ad/files/bc966cc5-b020-41dd-8c20-be8701b8201c.jpg'
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
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-foreground">Портфолио</h1>
            <div className="flex gap-8">
              <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Работы
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Обо мне
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-heading font-bold text-foreground mb-6">
              Дизайн логотипов
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Создаю профессиональные логотипы для современного бизнеса. 
              Минимализм, точность и внимание к деталям.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLogos.map((logo, index) => (
              <Card
                key={logo.id}
                className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={logo.image}
                    alt={logo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    {logo.category}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {logo.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Обо мне
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Профессиональный дизайнер с опытом создания более 100 логотипов для компаний 
              различного масштаба. Работаю в строгом деловом стиле, уделяя особое внимание 
              функциональности и узнаваемости бренда.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Каждый проект — это индивидуальный подход и глубокое погружение в бизнес клиента.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6 text-center">
              Связаться
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Обсудим ваш проект и создадим логотип, который работает
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Портфолио логотипов. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
