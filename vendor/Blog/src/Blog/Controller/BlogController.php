<?php

namespace Blog\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Blog\Model\Blog;
use Blog\Form\BlogForm;
use BjyAuthorize\Guard\Controller;

class BlogController extends AbstractActionController 
{
    protected $blogTable;

    public function indexAction()
    {
       // return new ViewModel();
        return new ViewModel(array(
            'blogs' => $this->getBlogTable()->fetchAll(),
            'currentRoute' => "",
       ));
  
    }


    public function viewAction()
    {
       $id = (int)$this->params('id');
        return new ViewModel(array(
            'blogs' => $this->getBlogTable()->getBlog($id),
            'currentRoute' => "blog", 
       ));
  
    }

    public function addAction()
    {
    
        $form = new BlogForm();
        $form->get('submit')->setAttribute('value', 'Add');

        $request = $this->getRequest();
        if ($request->isPost()) {
            $blog = new Blog();
            $form->setInputFilter($blog->getInputFilter());
            $form->setData($request->getPost());
            if ($form->isValid()) {
                $blog->exchangeArray($form->getData());
                $this->getBlogTable()->saveBlog($blog);

                // Redirect to list of blogs
                return $this->redirect()->toRoute('blog');
            }
        }

        return array('form' => $form);
    }

    public function editAction()
    {
        $id = (int)$this->params('id');
        if (!$id) {
            return $this->redirect()->toRoute('blog', array('action'=>'add'));
        }
        $blog = $this->getBlogTable()->getBlog($id);

        $form = new BlogForm();
        $form->bind($blog);
        $form->get('submit')->setAttribute('value', 'Edit');
        
        $request = $this->getRequest();
        if ($request->isPost()) {
            $form->setData($request->getPost());
            if ($form->isValid()) {
                $this->getBlogTable()->saveBlog($blog);

                // Redirect to list of blogs
                return $this->redirect()->toRoute('blog');
            }
            
        }

        return array(
            'id' => $id,
            'title' => $form->get('title'),
            'form' => $form,
        );
    }

    public function deleteAction()
    {
        $id = (int)$this->params('id');
        if (!$id) {
            return $this->redirect()->toRoute('blog');
        }

        $request = $this->getRequest();
        if ($request->isPost()) {
            $del = $request->getPost()->get('del', 'No');
            if ($del == 'Yes') {
                $id = (int)$request->getPost()->get('id');
                $this->getBlogTable()->deleteBlog($id);
            }

            // Redirect to list of blogs
            return $this->redirect()->toRoute('blog');
        }

        return array(
            'id' => $id,
            'blog' => $this->getBlogTable()->getBlog($id)
        );
    }

    public function getBlogTable()
    {
        if (!$this->blogTable) {
            $sm = $this->getServiceLocator();
            $this->blogTable = $sm->get('Blog\Model\BlogTable');
        }
        return $this->blogTable;
    }    
}
