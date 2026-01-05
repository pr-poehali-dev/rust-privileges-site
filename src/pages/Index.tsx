import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const privileges = [
    {
      id: 'bronze',
      name: 'Bronze Survivor',
      price: '299 ₽',
      color: 'from-amber-700 to-amber-900',
      icon: 'Flame',
      features: [
        'Ежедневный бонус ресурсов',
        'Доступ к /home команде',
        'Приоритет в очереди',
        'Личное хранилище 2x2',
        'Цветной ник в чате'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Raider',
      price: '599 ₽',
      color: 'from-slate-400 to-slate-600',
      icon: 'Zap',
      features: [
        'Все привилегии Bronze',
        'Ежедневный набор оружия',
        'Телепорт к друзьям (/tpr)',
        'Личное хранилище 4x4',
        'Возможность создать клан',
        'Скидка 10% в магазине'
      ],
      popular: true
    },
    {
      id: 'gold',
      name: 'Gold Legend',
      price: '999 ₽',
      color: 'from-yellow-400 to-yellow-600',
      icon: 'Crown',
      features: [
        'Все привилегии Silver',
        'Комплект брони высокого уровня',
        'Безлимитный /home',
        'Личное хранилище 6x6',
        'Приоритетная тех. поддержка',
        'Эксклюзивные скины',
        'Скидка 25% в магазине'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Как купить привилегию?',
      answer: 'Выберите нужный пакет, нажмите "Купить" и следуйте инструкциям на странице оплаты. После оплаты привилегия активируется автоматически в течение 5 минут.'
    },
    {
      question: 'На какой срок выдается привилегия?',
      answer: 'Все привилегии выдаются на 30 дней. После окончания срока вы можете продлить привилегию с сохранением всех бонусов.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен в течение 24 часов после покупки, если привилегия не была использована. Обратитесь в поддержку с указанием причины возврата.'
    },
    {
      question: 'Сохранятся ли мои предметы после вайпа?',
      answer: 'Привилегии сохраняются после вайпа. Некоторые бонусные предметы выдаются заново, но основные права доступа остаются.'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen meteor-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
      </div>

      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold glow-text">METEOR RUST</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'privileges', 'shop', 'about', 'faq', 'support'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'privileges' && 'Привилегии'}
                  {section === 'shop' && 'Магазин'}
                  {section === 'about' && 'О сервере'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'support' && 'Поддержка'}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="User" className="w-4 h-4 mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 text-sm">
            <Icon name="Users" className="w-3 h-3 mr-1" />
            Онлайн: 247 игроков
          </Badge>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 glow-text">
            METEOR RUST
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Премиум сервер с уникальными привилегиями и честной игрой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border">
              <Icon name="Rocket" className="w-5 h-5 mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="MessageSquare" className="w-5 h-5 mr-2" />
              Discord сообщество
            </Button>
          </div>
        </div>
      </section>

      <section id="privileges" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Система привилегий</h3>
          <p className="text-muted-foreground text-lg">Выберите свой путь к доминированию</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {privileges.map((privilege) => (
            <Card 
              key={privilege.id} 
              className={`relative overflow-hidden border-2 card-glow ${
                privilege.popular ? 'border-primary' : 'border-border'
              }`}
            >
              {privilege.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                  ПОПУЛЯРНОЕ
                </div>
              )}
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${privilege.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon name={privilege.icon as any} className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-center">{privilege.name}</CardTitle>
                <CardDescription className="text-center">
                  <span className="text-3xl font-bold text-foreground">{privilege.price}</span>
                  <span className="text-sm"> / месяц</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {privilege.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    privilege.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  Купить {privilege.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="shop" className="container mx-auto px-4 py-20 bg-card/30">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Магазин</h3>
          <p className="text-muted-foreground text-lg">Дополнительные предметы и бонусы</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Набор стартера', price: '99 ₽', icon: 'Package' },
            { name: 'Ресурсы x1000', price: '149 ₽', icon: 'Box' },
            { name: 'Оружейный кейс', price: '199 ₽', icon: 'Swords' },
            { name: 'Транспорт', price: '299 ₽', icon: 'Truck' }
          ].map((item, idx) => (
            <Card key={idx} className="card-glow border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3 mx-auto">
                  <Icon name={item.icon as any} className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-center">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-bold mb-4">{item.price}</p>
                <Button className="w-full" variant="outline">
                  <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">О сервере</h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <span className="text-primary font-bold">METEOR RUST</span> - это премиум сервер с уникальной атмосферой и честной игрой. 
              Мы создали идеальный баланс между сложностью выживания и комфортной игрой.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card className="text-center border-2">
                <CardHeader>
                  <Icon name="Users" className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-3xl">500+</CardTitle>
                  <CardDescription>Активных игроков</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-2">
                <CardHeader>
                  <Icon name="Shield" className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-3xl">24/7</CardTitle>
                  <CardDescription>Защита от читеров</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-2">
                <CardHeader>
                  <Icon name="Zap" className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-3xl">99.9%</CardTitle>
                  <CardDescription>Аптайм сервера</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p>
              Наша команда модераторов работает круглосуточно, чтобы обеспечить честную игру 
              и быстро реагировать на любые проблемы. Присоединяйтесь к нашему сообществу!
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">Частые вопросы</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="support" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Поддержка</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Нужна помощь? Наша команда всегда на связи
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-glow border-2">
              <CardHeader>
                <Icon name="MessageSquare" className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Discord</CardTitle>
                <CardDescription>Быстрая помощь в чате</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Открыть Discord
                </Button>
              </CardContent>
            </Card>
            <Card className="card-glow border-2">
              <CardHeader>
                <Icon name="Mail" className="w-12 h-12 text-accent mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
                <CardDescription>support@meteor-rust.ru</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Написать письмо
                </Button>
              </CardContent>
            </Card>
            <Card className="card-glow border-2">
              <CardHeader>
                <Icon name="Send" className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Онлайн-поддержка</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Открыть Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="w-6 h-6 text-primary" />
              <span className="font-bold">METEOR RUST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Meteor Rust. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Icon name="Youtube" className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="MessageSquare" className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Send" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
