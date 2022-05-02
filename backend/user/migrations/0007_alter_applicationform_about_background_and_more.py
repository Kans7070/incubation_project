# Generated by Django 4.0.3 on 2022-04-02 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_rename_companyname_applicationform_company_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationform',
            name='about_background',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_bussiness_proposal',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_company',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_competetors',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_plan',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_potential',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_problem',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_revenue_modal',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_solution',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='about_value_proposition',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='address',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='city',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='company_name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='email_id',
            field=models.EmailField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='incubation_type',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='name',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='phone',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='state',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
