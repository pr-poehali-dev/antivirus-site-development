import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [scanning, setScanning] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setScanning(true);
    setTimeout(() => setScanning(false), 3000);
  };

  const features = [
    {
      icon: 'Shield',
      title: 'Защита в реальном времени',
      description: 'Моментальное обнаружение и блокировка угроз'
    },
    {
      icon: 'Zap',
      title: 'Быстрое сканирование',
      description: 'Проверка системы за секунды, не тормозит ПК'
    },
    {
      icon: 'Lock',
      title: 'Безопасные платежи',
      description: 'Защита банковских данных при онлайн-покупках'
    },
    {
      icon: 'Cloud',
      title: 'Облачная база угроз',
      description: 'Обновление антивирусных баз каждую минуту'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full backdrop-blur-lg bg-background/80 border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center glow-purple">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">CyberShield</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#protection" className="hover:text-primary transition-colors">Защита</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
          </nav>
          <Button className="gradient-purple-blue glow-purple">
            Войти
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl font-black leading-tight">
                Защита нового
                <span className="gradient-text block">поколения</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Антивирус с искусственным интеллектом. Блокирует угрозы до того, как они появятся на вашем компьютере.
              </p>
              
              <Card className="p-8 border-2 border-primary/20 bg-card/50 backdrop-blur">
                <form onSubmit={handleRegister} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-4">Начните защиту бесплатно</h3>
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg bg-background border-2 border-primary/30 focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg gradient-magenta-purple glow-purple hover:scale-105 transition-transform"
                    disabled={scanning}
                  >
                    {scanning ? 'Активация защиты...' : 'Получить бесплатно'}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    14 дней премиум-защиты без оплаты
                  </p>
                </form>
              </Card>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 gradient-purple-blue rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                
                <Card className="relative p-8 border-2 border-primary/30 bg-card/80 backdrop-blur">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Статус системы</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
                        <span className="text-green-500 font-bold">Защищено</span>
                      </div>
                    </div>

                    <div className="relative h-48 rounded-xl bg-background/50 border border-border overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="Shield" size={80} className="text-primary/20" />
                      </div>
                      {scanning && (
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-scan"></div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-3xl font-bold text-green-500">0</div>
                        <div className="text-xs text-muted-foreground">Угрозы</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-xs text-muted-foreground">Защита</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background/50">
                        <div className="text-3xl font-bold text-secondary">999+</div>
                        <div className="text-xs text-muted-foreground">Блокировок</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="gradient-text">Возможности</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Технологии будущего для вашей безопасности сегодня
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 gradient-purple-blue rounded-xl flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="protection" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <div className="absolute -inset-4 gradient-magenta-purple rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
                <Card className="relative p-8 border-2 border-accent/30 bg-card/80 backdrop-blur">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-green-500/30">
                      <Icon name="CheckCircle" size={24} className="text-green-500" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Вредоносный файл</div>
                        <div className="text-xs text-muted-foreground">trojan.exe</div>
                      </div>
                      <span className="text-xs font-bold text-green-500">ЗАБЛОКИРОВАН</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-green-500/30">
                      <Icon name="CheckCircle" size={24} className="text-green-500" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Фишинговый сайт</div>
                        <div className="text-xs text-muted-foreground">fake-bank.com</div>
                      </div>
                      <span className="text-xs font-bold text-green-500">ЗАБЛОКИРОВАН</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-green-500/30">
                      <Icon name="CheckCircle" size={24} className="text-green-500" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Атака ransomware</div>
                        <div className="text-xs text-muted-foreground">crypto-locker.dll</div>
                      </div>
                      <span className="text-xs font-bold text-green-500">ЗАБЛОКИРОВАН</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl font-black leading-tight">
                Защита в реальном
                <span className="gradient-text block">времени 24/7</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Искусственный интеллект анализирует каждый файл, каждое подключение и каждое действие на вашем компьютере.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-secondary-blue rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                    <Icon name="Cpu" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ИИ-движок</h4>
                    <p className="text-muted-foreground">Обучен на миллионах образцов вредоносного ПО</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-secondary-blue rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                    <Icon name="Activity" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Поведенческий анализ</h4>
                    <p className="text-muted-foreground">Обнаруживает угрозы по поведению, а не только по сигнатурам</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-secondary-blue rounded-lg flex items-center justify-center flex-shrink-0 glow-blue">
                    <Icon name="Globe" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Веб-защита</h4>
                    <p className="text-muted-foreground">Блокирует фишинг и опасные сайты до их загрузки</p>
                  </div>
                </div>
              </div>

              <Button className="gradient-magenta-purple glow-purple text-lg px-8 py-6 hover:scale-105 transition-transform">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-purple-blue rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold">CyberShield</span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              © 2024 CyberShield. Защита нового поколения.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
