
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Phone, CheckCircle, XCircle, AlertCircle, Plus } from 'lucide-react';

interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  price: number;
}

const BookingSystem = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      customerName: 'أحمد محمد',
      customerPhone: '+966501234567',
      service: 'قطع ليزر للمعدن',
      date: '2024-06-20',
      time: '10:00',
      status: 'pending',
      notes: 'قطعة معدنية صغيرة - سماكة 3مم',
      price: 150
    },
    {
      id: '2',
      customerName: 'فاطمة علي',
      customerPhone: '+966509876543',
      service: 'نقش على الخشب',
      date: '2024-06-21',
      time: '14:30',
      status: 'confirmed',
      notes: 'نقش اسم على لوحة خشبية',
      price: 200
    },
    {
      id: '3',
      customerName: 'خالد سعد',
      customerPhone: '+966512345678',
      service: 'حفر على الزجاج',
      date: '2024-06-19',
      time: '09:00',
      status: 'completed',
      notes: 'حفر شعار الشركة',
      price: 300
    }
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredBookings = bookings.filter(booking => {
    const matchesDate = booking.date === selectedDate;
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
    return matchesDate && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'confirmed': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'في الانتظار';
      case 'confirmed': return 'مؤكد';
      case 'completed': return 'مكتمل';
      case 'cancelled': return 'ملغي';
      default: return 'غير محدد';
    }
  };

  const updateBookingStatus = (bookingId: string, newStatus: Booking['status']) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Calendar className="h-8 w-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">نظام الحجوزات</h2>
            <p className="text-gray-400">إدارة حجوزات العملاء والمواعيد</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 ml-2" />
          حجز جديد
        </Button>
      </div>

      {/* أدوات التصفية */}
      <Card className="bg-slate-800/50 border-blue-500/30">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2">التاريخ</label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2">الحالة</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              >
                <option value="all">جميع الحالات</option>
                <option value="pending">في الانتظار</option>
                <option value="confirmed">مؤكد</option>
                <option value="completed">مكتمل</option>
                <option value="cancelled">ملغي</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {bookings.filter(b => b.status === 'pending').length}
            </div>
            <div className="text-gray-300">في الانتظار</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {bookings.filter(b => b.status === 'confirmed').length}
            </div>
            <div className="text-gray-300">مؤكد</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {bookings.filter(b => b.status === 'completed').length}
            </div>
            <div className="text-gray-300">مكتمل</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-600/20 to-pink-600/20 border-red-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">
              {bookings.filter(b => b.status === 'cancelled').length}
            </div>
            <div className="text-gray-300">ملغي</div>
          </CardContent>
        </Card>
      </div>

      {/* قائمة الحجوزات */}
      <Card className="bg-slate-800/50 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white">حجوزات يوم {selectedDate}</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredBookings.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">لا توجد حجوزات في هذا التاريخ</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:bg-slate-700/70 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-3">
                        <h3 className="text-white font-semibold text-lg">{booking.customerName}</h3>
                        <Badge className={`${getStatusColor(booking.status)} text-white flex items-center space-x-1 rtl:space-x-reverse`}>
                          {getStatusIcon(booking.status)}
                          <span>{getStatusText(booking.status)}</span>
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                          <Phone className="h-4 w-4" />
                          <span>{booking.customerPhone}</span>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                          <Clock className="h-4 w-4" />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-blue-400 font-medium">{booking.service}</p>
                        <p className="text-gray-400 text-sm mt-1">{booking.notes}</p>
                      </div>
                      
                      <div className="text-green-400 font-bold">
                        {booking.price} ر.س
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      {booking.status === 'pending' && (
                        <Button
                          size="sm"
                          onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          تأكيد
                        </Button>
                      )}
                      
                      {booking.status === 'confirmed' && (
                        <Button
                          size="sm"
                          onClick={() => updateBookingStatus(booking.id, 'completed')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          إكمال
                        </Button>
                      )}
                      
                      {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                          className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                        >
                          إلغاء
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSystem;
