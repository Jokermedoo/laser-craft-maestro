
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Search, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'customer' | 'employee';
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastLogin: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'محمد أحمد',
      email: 'mohamed@example.com',
      phone: '+966501234567',
      role: 'customer',
      status: 'active',
      joinDate: '2024-01-15',
      lastLogin: '2024-06-14'
    },
    {
      id: '2',
      name: 'سارة علي',
      email: 'sara@example.com',
      phone: '+966509876543',
      role: 'customer',
      status: 'active',
      joinDate: '2024-02-10',
      lastLogin: '2024-06-13'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-500';
      case 'employee': return 'bg-blue-500';
      case 'customer': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'inactive': return 'bg-gray-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Users className="h-8 w-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">إدارة المستخدمين</h2>
            <p className="text-gray-400">إدارة حسابات العملاء والموظفين</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 ml-2" />
          إضافة مستخدم جديد
        </Button>
      </div>

      {/* أدوات البحث والتصفية */}
      <Card className="bg-slate-800/50 border-blue-500/30">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="البحث عن المستخدمين..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
            >
              <option value="all">جميع الأدوار</option>
              <option value="admin">مدير</option>
              <option value="employee">موظف</option>
              <option value="customer">عميل</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* جدول المستخدمين */}
      <Card className="bg-slate-800/50 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white">قائمة المستخدمين</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-right p-3">الاسم</th>
                  <th className="text-right p-3">البريد الإلكتروني</th>
                  <th className="text-right p-3">الهاتف</th>
                  <th className="text-right p-3">الدور</th>
                  <th className="text-right p-3">الحالة</th>
                  <th className="text-right p-3">تاريخ الانضمام</th>
                  <th className="text-right p-3">آخر تسجيل دخول</th>
                  <th className="text-right p-3">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                    <td className="p-3 font-medium">{user.name}</td>
                    <td className="p-3 text-gray-300">{user.email}</td>
                    <td className="p-3 text-gray-300">{user.phone}</td>
                    <td className="p-3">
                      <Badge className={`${getRoleColor(user.role)} text-white`}>
                        {user.role === 'admin' ? 'مدير' : 
                         user.role === 'employee' ? 'موظف' : 'عميل'}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge className={`${getStatusColor(user.status)} text-white`}>
                        {user.status === 'active' ? 'نشط' : 
                         user.status === 'inactive' ? 'غير نشط' : 'في الانتظار'}
                      </Badge>
                    </td>
                    <td className="p-3 text-gray-300">{user.joinDate}</td>
                    <td className="p-3 text-gray-300">{user.lastLogin}</td>
                    <td className="p-3">
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <Button size="sm" variant="outline" className="text-blue-400 border-blue-400">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-green-400 border-green-400">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-400 border-red-400">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {users.length}
            </div>
            <div className="text-gray-300">إجمالي المستخدمين</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {users.filter(u => u.status === 'active').length}
            </div>
            <div className="text-gray-300">المستخدمين النشطين</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {users.filter(u => u.role === 'customer').length}
            </div>
            <div className="text-gray-300">العملاء</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {users.filter(u => u.role === 'employee').length}
            </div>
            <div className="text-gray-300">الموظفين</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
